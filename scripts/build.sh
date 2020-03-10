for element in "borders" "colors" "flexbox" "grid" "overflow" "position" "reset" "screen" "shadows" "shape" "sizes" "spacing" "text"; do
    sass src/elements/$element.sass elements/$element.min.css -s compressed
    sass src/elements/$element.sass elements/$element.css --no-source-map
done

for varset in "borders" "colors" "screen" "shadows" "spacing" "text"; do
    sass src/variables/$varset.sass variables/$varset.min.css -s compressed
    sass src/variables/$varset.sass variables/$varset.css --no-source-map
done

for export in "borders" "color" "flexbox" "grid" "default" "overflow" "position" "screen" "shadows" "shape" "sizes" "spacing" "text"; do
    sass src/exports/$export.sass $export.min.css -s compressed
    sass src/exports/$export.sass $export.css --no-source-map
done
