import Header from './Header'
import './Header.css'
import './Main.css'
import React, { useState} from 'react'


const Main = () => { 

    const [sexo, setSexo] = useState([])
    const [altura, setAltura] = useState([])
    const [peso, setPeso] = useState([])
    const [idade, setIdade] = useState([])
    const [imc, setImc] = useState([])
    const [grau, setGrau] = useState('')

    console.log(sexo, altura, peso, idade, imc)


    localStorage.setItem(setIdade, idade)
    localStorage.setItem(setAltura, altura)
    localStorage.setItem(setPeso, peso)

    const alturaCm = altura / 100
    const calcImc = () => {
        const imc = peso / (alturaCm * alturaCm);
        const imcForm = imc.toFixed(2)
        setImc(imcForm);
        if (sexo ==='masculino'){
            if (imc < 20.5) {
                setGrau('Abaixo do peso')
            }else if (imc >= 20.5 && imc < 26) {
                setGrau('Peso ideal')
            }else if (imc >= 26 && imc < 31) {
                setGrau('Excesso de peso')
            }else if(imc >= 31 && imc < 36){
                setGrau('Obesidade 1')
            }
            else if(imc >= 36 && imc < 41){
                setGrau('Obesidade 2')
            }
            else if(imc >= 41) {
                setGrau('Obesidade 3')
            }
        }else if (sexo === 'feminino') {
            if (imc < 18.5) {
                setGrau('Abaixo do peso')
            }else if (imc >= 18.5 && imc < 25) {
                setGrau('Peso ideal')
            }else if (imc >= 25 && imc < 30) {
                setGrau('Excesso de peso')
            }else if(imc >= 30 && imc < 35){
                setGrau('Obesidade 1')
            }
            else if(imc >= 35 && imc < 40){
                setGrau('Obesidade 2')
            }
            else if(imc >= 40) {
                setGrau('Obesidade 3')
            }
        }
      };
    
    
    return(
        
    <>  
        <Header />
        <main className="content">
            <div className='form'>
                <div className='button' >
                    <a href="#" className='btn' id='masculino'  onClick={e => setSexo(e.target.id)} >HOMEM</a>
                    <a href="#" className='btn' id='feminino'  onClick={e => setSexo(e.target.id)} >MULHER</a>
                </div>
                <form id='my-form' onSubmit={ (e) => { e.preventDefault()}}>
                    <input type="number" name="idade" id="idade"  required onChange={e => setIdade(e.target.value)}/>
                    <span className='idade'>Idade</span>    
                    <input type="number" name="altura" id="altura"  required onChange={e => setAltura( e.target.value)}/>
                    <span className='altura'>Altura CM</span>
                    <input type="number" name="peso" id="peso" required onChange={e => setPeso(e.target.value)}/>
                    <span className='peso'>Peso KG </span>
                    <input type="submit" className='butao' onClick={calcImc}/>
                </form>         
            </div>
            <div className="form">
                <h1></h1>
                <div className="result">
                    <span className="result">IMC: {imc} </span>
                    <span className="nivel"> {grau}</span>
                </div>
            </div>
        </main>
    </>
    
    )}
export default Main;