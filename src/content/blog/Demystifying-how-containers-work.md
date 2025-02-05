---
title: "Demystifying how containers work"
description: "When we talk about containers, people often confuse them with virtualization. It seems like running a program inside a virtual machine. But containers are completely different from virtual machines!"
pubDatetime: 2024-10-09T18:00:00Z
tags: ["docker", "containers", "kubernetes", "virtualization", "cgroups"]
author: "Bruno Ciccarino"
featured: true
draft: false
---

When we talk about containers, people often confuse them with virtualization. It seems like running a program inside a virtual machine. But containers are completely different from virtual machines!

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s8pinq0mpqa9r6luf71e.jpeg)

If I were to summarize the difference in a single sentence, the virtual machine runs a new kernel, possibly on another architecture, such as x86 on top of ARM. However, the container reuses the same kernel, necessarily on the same hardware architecture. That's the big difference.

Linux containers are completely different from BSD containers. Windows and Mac have different structures for containers. Windows can run containers to run Windows apps. This is lightweight, but when Windows or MacOS need to run Linux apps, they actually start a Linux virtual machine first, such as WSL. Therefore, it does involve virtualization, and it is inside this machine that a Docker desktop creates Linux containers.

But how do containers work in practice? The magic happens thanks to a Linux kernel feature called cgroups (control groups), which allows you to limit and isolate the use of resources (CPU, memory, disk) by a set of processes. In addition, namespaces isolate the file system, network, PID and other operating system resources.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/53ecsqsdm5k20e35r9f2.png)

Docker, the most popular tool for creating and managing containers, uses these Linux kernel features to create an isolated environment for each container. A file called Dockerfile defines the instructions for building a container, including the base image, dependencies and commands to run the application.

In short, containers are an abstraction over the operating system resources, providing a lightweight and isolated environment for running applications. The combination of cgroups and namespaces allows multiple containers to be run on the same physical machine efficiently and securely.