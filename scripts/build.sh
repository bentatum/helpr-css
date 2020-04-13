for component in "borders" "colors" "flex" "flow" "grid" "position" "reset" "screen" "shadows" "shape" "size" "space" "text"; do
    # Vars
    sass src/$component/vars.sass dist/vars/$component.min.css -s compressed
    sass src/$component/vars.sass dist/vars/$component.css --no-source-map
    # Components + Vars
    sass src/$component/index.sass dist/components/$component.min.css -s compressed
    sass src/$component/index.sass dist/components/$component.css --no-source-map
done

# Default export
sass src/index.sass dist/default.min.css -s compressed
sass src/index.sass dist/default.css --no-source-map
