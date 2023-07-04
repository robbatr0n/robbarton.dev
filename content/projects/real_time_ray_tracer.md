---
title: 'CUDA Real Time Ray Tracer'
desc: 'A ray tracer capable of rendering 3D scenes in real time. Built using CUDA and C++'
thumbnail: images/cuda_real_time_ray_tracer_cover.png
slideshowImages:
  - images/cuda_real_time_ray_tracer_1.png
  - images/cuda_real_time_ray_tracer_2.png
  - images/cuda_real_time_ray_tracer_animation.gif
category: 'software'
tags:
  - C++
  - CUDA
  - OpenGL
links:
  - Github
slug: real-time-ray-tracer
---

Recent advancements in the field of ray tracing have made ’real-time’ ray tracing much more viable on consumer hardware.

The focus of this project was the design and implementation of a ray tracing rendering system that is capable of producing high quality, graphical scenes in real-time. This project will take advantage of the parallel capabilities of CUDA capable cards to produce scenes that incorporate lighting effects such as shadows, reflections and refractions, whilst allowing the user to interact with it in real time.

The project is built using Nvidia's parallel computing platform, CUDA to rapidly generate thousands of frames of a scene which are then stitched together and presented to the user using CUDA/OpenGL Interoperability.
