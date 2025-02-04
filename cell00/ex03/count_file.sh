#!/bin/bash

# Count files (excluding directories)
file_count=$(find . -maxdepth 1 -type f | wc -l)

echo "Number of files in the current directory: $file_count"
