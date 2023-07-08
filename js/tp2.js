const productos = [{id: 1, nombre: "Alfajores de Nuez", precio: 550, stock: 48},
                  {id: 2, nombre: "Alfajores de Chocolate", precio: 500, stock: 60},
                  {id: 2, nombre: "Alfajores de Coco", precio: 600, stock: 24},
                  {id: 2, nombre: "Alfajores de Almendra", precio: 550, stock: 48},
]
console.table(productos)


const alfajorcitos = ["Alfajorcitos de nuez", "Alfajorcitos de almendra", "Alfajorcitos de chocolate", "Alfajorcitos de coco"]

const galletitas = ["Galletitas de limón rellenas", "Galletitas de café", "Melcochudas", "Lunettes"]

const tartas = ["Lemon pie", "Tarta de manzana", "Tarta de pera", "Tarta de ricots"]

const pasteleria = alfajorcitos.concat(galletitas.concat(tartas))

function agregarGalletitas () {
    //"Galletitas de vainilla", "Galletitas de coco"
    let nuevaGalletita = prompt("Ingresa una nueva galletita al menú: ")
    if (nuevaGalletita.trim !== ""){  
        galletitas.push(nuevaGalletita)
        console.clear 
        console.table(galletitas) 
    }
}

function quitarGalletitas () {
    console.clear()
    let galletitaQuitada = galletitas.pop() 
    alert("Se ha quitado una galletita del menú" + galletitaQuitada)
    console.table(galletitas)
} 
