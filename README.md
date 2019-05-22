
# Mesa3d Build and Install from source

### Clone
Clone Mesa repository
```bash
git clone https://gitlab.freedesktop.org/mesa/mesa.git
```


### Build
cd & build 
```bash
meson --prefix=$desired_path $desired_path/
```

or

 build with asan enabled 
```bash
meson -Db_sanitize=address --prefix='$desired_path' $desired_path/
```



Next, build the project in the directory
```bash
ninja -C $desired_path/
```

Finally, install 
```bash
ninja -C $desired_path/ install
```

### Usage
When running opgnGl application, set env variables pointing to the directory to which mesa installed
```bash
LD_LIBRARY_PATH=$desired_path LIBGL_DRIVERS_PATH=$desired_path java -jar -ea gles-desktop-worker.jar
```





