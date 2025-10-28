#!/usr/bin/env python3
"""
Image Optimization Script for iDigital Website
Compresses and optimizes all images for better performance
"""

import os
import sys
from PIL import Image
import glob
from pathlib import Path

def optimize_image(input_path, output_path=None, quality=85, max_width=1920):
    """
    Optimize a single image file
    """
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create a white background for transparent images
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save optimized image
            if output_path is None:
                output_path = input_path
            
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            return True
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")
        return False

def get_file_size(file_path):
    """Get file size in bytes"""
    return os.path.getsize(file_path)

def optimize_directory(directory, quality=85, max_width=1920):
    """
    Optimize all images in a directory
    """
    total_saved = 0
    total_files = 0
    
    # Supported image formats
    extensions = ['*.jpg', '*.jpeg', '*.png', '*.bmp', '*.tiff', '*.webp']
    
    for ext in extensions:
        pattern = os.path.join(directory, '**', ext)
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            original_size = get_file_size(file_path)
            
            # Create backup
            backup_path = file_path + '.backup'
            if not os.path.exists(backup_path):
                os.rename(file_path, backup_path)
                file_path = backup_path
            
            # Optimize
            if optimize_image(backup_path, file_path, quality, max_width):
                new_size = get_file_size(file_path)
                saved = original_size - new_size
                total_saved += saved
                print(f"✓ {file_path}: {original_size} → {new_size} bytes (saved {saved} bytes)")
            else:
                # Restore backup if optimization failed
                os.rename(backup_path, file_path)
                print(f"✗ Failed to optimize {file_path}")
    
    print(f"\nOptimization complete!")
    print(f"Files processed: {total_files}")
    print(f"Total space saved: {total_saved / 1024 / 1024:.2f} MB")
    
    return total_saved, total_files

def main():
    """Main optimization function"""
    print("🖼️  iDigital Image Optimization Tool")
    print("=" * 50)
    
    # Directories to optimize
    directories = [
        'img',
        'assets/images'
    ]
    
    total_saved = 0
    total_files = 0
    
    for directory in directories:
        if os.path.exists(directory):
            print(f"\n📁 Optimizing {directory}...")
            saved, files = optimize_directory(directory, quality=85, max_width=1920)
            total_saved += saved
            total_files += files
        else:
            print(f"⚠️  Directory {directory} not found")
    
    print(f"\n🎉 Optimization Summary:")
    print(f"Total files processed: {total_files}")
    print(f"Total space saved: {total_saved / 1024 / 1024:.2f} MB")
    print(f"Average compression: {((total_saved / (total_files * 100000)) * 100):.1f}%")

if __name__ == "__main__":
    main()
