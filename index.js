var secciones= [{
    'seccion': 'Datos Académicos',
    'url': 'secciones/Datos Academicos.html',
  },{
    'seccion': 'Datos Personales',
    'url': 'secciones/Datos Personales.html',
  },{
    'seccion': 'Habilidades',
    'url': 'secciones/Habilidades.html',
  },{
    'seccion': 'Objetivos',
    'url': 'secciones/Objetivos.html'
  },{
    'seccion': 'Pasatiempos',
    'url': 'secciones/Pasatiempos.html'
  },{
    'seccion': 'Investigación',
    'url': 'secciones/Investigacion.html'
  }
]

function renderSecciones(){
  secciones.map((sec)=>{
    let tag = document.createElement('a');
    var content = document.getElementById('content');
    tag.innerHTML = sec.seccion;
    tag.href= sec.url;
    tag.classList.add('link');
    content.appendChild(tag);
    return ;
  })
}
