const motivo_general = document.getElementById('select-motivodeconsulta')
const motivo_especifico = document.getElementById('select-motivoespecifico')
const boton = document.getElementById('enviar')
const listado = document.getElementById('listado')
const nombre = document.getElementById('input-nombre')
const edad = document.getElementById('input-edad')
const sexo = document.getElementById('input-sexo')
const error = document.getElementById('error')

class Motivo {
    constructor(motivo, propiedades ){
        this.motivo = motivo
        this.propiedades = propiedades
    }
}

class Paciente {
    constructor(nombre, edad, sexo, motivo) {
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.motivo = motivo
    }
}

const cabeza = new Motivo('Cabeza',['Migrañas',
'Cefalea Tensional',
'Cefalea en Racimos',
'Cefalea en Brotes',
'Vértigo Posicional Paroxístico Benigno (VPPB)',
'Laberintitis',
'Neuronitis Vestibular',
'Trastorno Vestibular Periférico',
'Conmoción Cerebral',
'Hematoma Subdural',
'Hematoma Epidural',
'Fracturas Craneales',
'Miopía',
'Hipermetropía',
'Astigmatismo',
'Presbicia',
'Pérdida de Audición Conductiva',
'Pérdida de Audición Sensorineural',
'Acúfeno (zumbido en los oídos)',
'Hipoacusia Súbita',
'Epilepsia',
'Migrañas con Aura',
'Parálisis Facial (parálisis de Bell)',
'Trastornos del Habla',
'Caries Dental',
'Gingivitis', 
'Absceso Dental', 
'Bruxismo (rechinar de dientes)', 
'Caspa', 
'Dermatitis Seborreica', 
'Psoriasis del Cuero Cabelludo', 
'Infecciones Fúngicas', 
'Ansiedad', 
'Depresión', 
'Trastorno de Estrés Postraumático (TEPT)', 
'Trastorno de Somatización', 
'Sinusitis Aguda', 
'Sinusitis Crónica', 
'Poliposis Nasal', 
'Rinitis Alérgica'])

const torax = new Motivo('Torax',['Angina de Pecho',
'Dolor Muscular en el Pecho', 
'Costocondritis',
'Asma', 
'Enfermedad Pulmonar Obstructiva Crónica (EPOC)', 
'Neumonía', 
'Bronquitis Crónica',
'Infarto de Miocardio', 
'Insuficiencia Cardíaca', 
'Arritmias Cardíacas',
'Reflujo Gastroesofágico (ERGE)', 
'Esófago de Barrett', 
'Disfagia (dificultad para tragar)',
'Fracturas de Costillas', 
'Contusiones Pulmonares', 
'Lesiones de la Caja Torácica',
'Neuralgia Intercostal', 
'Herpes Zóster (culebrilla)',
'Sinusitis', 
'Infecciones en el Tórax',
'Hernia Diafragmática', 
'Parálisis del Diafragma',
'Cáncer de Mama', 
'Mastitis (inflamación de la mama)',
'Úlcera Péptica', 
'Pancreatitis', 
'Colecistitis (inflamación de la vesícula biliar)'])

const cuello = new Motivo('Cuello',['Cervicalgia',
'Esguince de Cuello', 'Dolor de Garganta', 'Amigdalitis',
'Hipertiroidismo', 'Hipotiroidismo', 'Bocio',
'Nódulos Tiroideos','Ronquera',
'Disfagia (dificultad para tragar)', 'Tos Crónica',
'Faringitis'])

const abdomen = new Motivo('Abdomen',['Dolor Abdominal Agudo',
'Dolor Abdominal Crónico', 'Cólicos','Acidez Estomacal',
'Reflujo Gastroesofágico (ERGE)', 'Diarrea Crónica',
'Estreñimiento','Hepatitis', 'Cálculos Biliares',
'Hepatomegalia (aumento del tamaño del hígado)',
'Colecistitis (inflamación de la vesícula biliar)'])

const extremidades = new Motivo('Extremidades',['Dolor en las Piernas',
'Dolor en los Brazos', 'Dolor en las Articulaciones',
'Dolor Muscular','Esguinces', 'Fracturas', 'Tendinitis',
'Contusiones','Artritis', 'Artrosis', 'Bursitis',
'Sinovitis'])

const motivos = [cabeza, cuello, torax, abdomen,extremidades]

const validar = motivos =>{
    motivos.forEach(motivo =>{
        if (motivo_general.value !== 'n/a'){
            if (motivo_general.value=== motivo.motivo){
                    motivo_especifico.innerHTML = ''
                    motivo.propiedades.forEach(propiedad=> {
                        motivo_especifico.innerHTML += `<option value=${propiedad}>${propiedad}</option>`;
                    });
            }}else{
                motivo_especifico.innerHTML = ''
            }})
    }

const verificar = () =>{
    if (nombre.value === '' || edad.value === '' || sexo.value === '' || motivo_general.value === 'n/a' || motivo_especifico.value === ''){
        error.style.color='red'
        error.innerHTML='Debe llenar todos los campos'
        boton.setAttribute('disabled', 'disabled')
        setTimeout(()=>{
            error.innerHTML=''
            boton.removeAttribute('disabled')
        },4000)
        return false
    }else{
        error.style.color='green'
        error.innerHTML='Paciente registrado con éxito'
        boton.setAttribute('disabled', 'disabled')
        setTimeout(()=>{
            error.innerHTML=''
            boton.removeAttribute('disabled')
        },4000)
        return true
    }
}


motivo_general.addEventListener('change',()=>{
    validar(motivos)
})

boton.addEventListener('click',()=>{
    let ok = verificar();
    if (ok){
    let px = new Paciente(nombre.value,
        edad.value,
        sexo.value,
        motivo_especifico.value)

    listado.innerHTML += `<li key=${px.nombre}>
    <p>Nombre: ${px.nombre}</p>
    <p>Edad: ${px.edad}</p>
    <p>Sexo: ${px.sexo}</p>
    <p>Motivo de consulta: ${px.motivo}</p>
    </li>`

    nombre.value = ''
    edad.value = ''
    sexo.value = ''
    motivo_general.value = 'n/a'
    motivo_especifico.innerHTML = ''}
})
