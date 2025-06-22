import HeaderTips from "./_components/header";


interface TipsProps{
    children: React.ReactNode
}

const Tipsy = ({children}: TipsProps) => {
    return ( 
        <div>
            <HeaderTips/>
            {children}
        </div>
     );
}
 
export default Tipsy;