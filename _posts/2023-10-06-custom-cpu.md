---
layout: post
title: "Custom CPU Design on Logisim"
permalink: /custom-cpu/
date: 2023-10-06
excerpt-separator: <!--more-->
tags: [Hardware]
image: cover-cpu.jpg
---

In this project, I designed a custom CPU using Logisim, focusing on the implementation of a RISC-V 32-bit architecture. This involved creating a skeleton CPU that can execute all ALU operations, manage registers, generate immediate values, and handle a variety of instructions.

<!--more-->

## Project Overview

Technologies used: Logism, RISC-V

#### Skeleton CPU and ALU Operations
I designed a skeleton CPU capable of executing all ALU operations. This ensured efficient processing and data manipulation within the CPU. Additionally, I incorporated circuits to represent 32 registers, providing comprehensive read/write capabilities essential for storing and accessing data.

#### Immediate Generator for RISC-V Instructions
To support all CPU instructions based on the RISC-V 32-bit architecture, I developed an immediate generator. This component is crucial for facilitating precise and varied data operations, which are essential for advanced computing tasks.

#### Single-Cycle and 2-Stage-Pipeline Processors
I engineered both single-cycle and 2-stage-pipeline processors. This enhancement significantly improved the CPU's performance and throughput by optimizing instruction execution stages and pipeline efficiency. The single-cycle processor executes one instruction per clock cycle, while the 2-stage pipeline divides instruction execution into two stages, allowing for overlapping of instruction processing.

#### Comprehensive Control Logic
To manage load, store, jump, and branch instructions, I implemented comprehensive control logic. This component effectively addresses hazards and ensures smooth and accurate instruction execution in various scenarios. The control logic is responsible for decoding instructions and generating the necessary signals to control data paths, ALU operations, and memory access.

### Conclusion
Through this project, I gained a deeper understanding of CPU architecture and design, particularly within the context of the RISC-V instruction set. The skills and knowledge acquired from this project are fundamental for anyone interested in computer architecture and low-level hardware design.
