for element in "borders" "colors" "flexbox" "grid" "overflow" "reset" "screen" "shadows" "shape" "sizes" "spacing" "text"; do
    sass src/elements/$element.sass elements/$element.css -s compressed
    sass src/elements/$element.sass uncompressed/elements/$element.css --no-source-map
done

for varset in "borders" "colors" "screen" "shadows" "spacing" "text"; do
    sass src/variables/$varset.sass variables/$varset.css -s compressed
    sass src/variables/$varset.sass uncompressed/variables/$varset.css --no-source-map
done

for export in "borders" "color" "flexbox" "grid" "kitchen-sink" "overflow" "screen" "shadows" "shape" "sizes" "spacing" "text"; do
    sass src/exports/$export.sass $export.css -s compressed
    sass src/exports/$export.sass uncompressed/$export.css --no-source-map
done
