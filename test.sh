#!/bin/bash

# 确保从 test0 开始到 test999 结束
for i in $(seq 0 99); do
    dir="weizuxiao/P0y17r_$i"

    # 检查目录是否存在且是 Git 仓库
    if [ -d "$dir/.git" ]; then
        echo "Checking repository in $dir..."
        git -C "$dir" fsck --full
    else
        echo "Directory $dir does not exist or is not a Git repository."
    fi
done