export default function Countries(props: { name: string ; population: string | number ; capital_city: string ; }){
    
    return(
        <>
        <h1>Country Data :-</h1>
        
        <p>Country name : {props.name}</p>
        <p>Population : {props.population}</p>
        <p>Capital city : {props.capital_city}</p>
        </>
    )
    }