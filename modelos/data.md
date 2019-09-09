---
layout: default
title: "Data"
nav_order: 101
permalink: /data/
---

{% for curso in site.data.cursos %}
## {{ curso.nombre }}
#### Desde el {{ curso.dia_inicio }} hasta el {{ curso.dia_fin }}.

**Profe**: {{ curso.profe_completo }}.

**Horario de sala de chat:** {{ curso.dia_chat }}

**Módulos:**
1. {{ curso.modulos.m1.nombre }}
1. {{ curso.modulos.m2.nombre }}
1. {{ curso.modulos.m3.nombre }}

{% endfor %}
