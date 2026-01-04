import os
import sys
import subprocess

def install_dependencies():
    print("Checking dependencies...")
    try:
        import PIL
        print("Pillow is already installed.")
    except ImportError:
        print("Installing Pillow...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])

def process_logo():
    from PIL import Image
    
    input_path = "public/logo.png"
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found. Make sure you are in the project root.")
        return

    print(f"Opening {input_path}...")
    with Image.open(input_path) as img:
        # Convert to RGBA if not already
        img = img.convert("RGBA")
        
        # 1. Create a specialized favicon.ico (containing multiple sizes)
        print("Creating favicon.ico...")
        favicon_sizes = [(16, 16), (32, 32), (48, 48)]
        img.save("public/favicon.ico", sizes=favicon_sizes)
        
        # 2. Create a high-quality but web-optimized PNG version
        print("Optimizing logo.png (512x512)...")
        optimized_logo = img.resize((512, 512), Image.Resampling.LANCZOS)
        optimized_logo.save("public/logo.png", optimize=True, quality=85)
        
        # 3. Create an Apple Touch Icon
        print("Creating apple-touch-icon.png...")
        apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
        apple_icon.save("public/apple-touch-icon.png")

def update_html():
    file_path = "index.html"
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return

    print(f"Updating {file_path}...")
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Add/Update favicon and apple-touch-icon links
    # We'll replace the line we just added or similar
    import re
    
    # Update favicon link to use .ico for best compatibility
    if '<link rel="icon"' in content:
        content = re.sub(
            r'<link rel="icon" [^>]+>',
            '<link rel="icon" type="image/x-icon" href="/favicon.ico" />',
            content
        )
    
    # Add apple-touch-icon if missing
    if 'apple-touch-icon' not in content:
        apple_tag = '    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />\n'
        content = content.replace('<link rel="icon"', apple_tag + '    <link rel="icon"')

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    install_dependencies()
    process_logo()
    update_html()
    print("Done! Assets optimized and HTML updated.")
