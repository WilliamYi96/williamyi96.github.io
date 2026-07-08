---
layout: about
title: about
permalink: /
subtitle: Research Scientist at <a href='https://ai.meta.com/'>Meta AI</a>, Sunnyvale, CA.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Meta AI</p>
    <p>Sunnyvale, CA, USA</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a Research Scientist at Meta AI in Sunnyvale, working on model compression and inference acceleration for large language models. My research focuses on low-bit quantization, quantization-aware training, post-training compression, and deployment-aware optimization, with the broader goal of making foundation models more efficient to train, adapt, and serve.

I received my Ph.D. in Computer Science from [KAUST](https://kaust.edu.sa/en) in June 2025, advised by [Prof. Peter Richtárik](https://richtarik.org/). Before that, I completed my Master’s degree at KAUST under the supervision of [Prof. Mohamed Elhoseiny](https://www.mohamed-elhoseiny.com/) and received my Bachelor of Engineering with honors from [Xi’an Jiaotong University (XJTU)](http://en.xjtu.edu.cn/).

My recent work studies efficient LLM compression, including extreme low-bit quantization, QAT/PTQ methods, and deployment-aware optimization. Representative works include [SymWanda](https://arxiv.org/abs/2501.18980), [PV-Tuning](https://arxiv.org/abs/2405.14852), [WinQ](https://arxiv.org/abs/2605.17471), and [JacQuant](https://arxiv.org/abs/2605.25469). Previously, I worked on communication-efficient federated and distributed learning, including [CohortSqueeze](https://arxiv.org/abs/2406.01115), [FedP3](https://arxiv.org/abs/2404.09816), FedComLoc, and [EF-BV](https://arxiv.org/abs/2205.04180).

## Research Interests

- **LLM Model Compression**: Post-Training Quantization/Pruning, Low-Bit Quantization-Aware Training, Extreme Quantization, Weight/Activation/KV Cache Compression, and Compression-Robust Fine-Tuning
- **LLM Inference Acceleration**: Deployment-Efficient Optimization, Hardware-Aware Compression, Memory- and Bandwidth-Efficient Serving, Speculative Decoding, Long-Context Efficiency, and Efficient Attention/KV Management
- **Efficient Training and Adaptation**: Efficient Pretraining, Parameter-Efficient Fine-Tuning, Quantization-Aware Adaptation, and Optimization for Resource-Constrained Foundation Models
- **Federated and Distributed Optimization**: Communication-Efficient Training, Personalization, Sparsity, Data/Model Heterogeneity, and Scalable Distributed Learning
