import adidas from '../../../../image/adidas.png'
import nb from '../../../../image/nb.png'
import nike from '../../../../image/nike.png'
import sepatuPria from '../../../../image/sepatu-pria.png'
import sepatuWanita from '../../../../image/sepatu-wanita.png'
import league from '../../../../image/league.png'
import vans from '../../../../image/vans.png'
import converse from '../../../../image/converse.png'
import { Container } from 'react-bootstrap'

const Conten = ({picture, alt, productRoute}) => {
    return (
        <div className='col-4 col-sm-3'>
        <a href={productRoute}><img src={picture} alt={alt} className="img-thumbnail img-fluid" style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }} /></a>
    </div>
    )
}

const CategoryPage = () => {
    return (
        <div>

<Container>

<div className='row mt-md-5 justify-content-center g-2 g-lg-5'>
 <Conten  picture={adidas} alt="Adidas" productRoute={"/product/adidas"}/> 
 <Conten  picture={nb} alt="Nb"/> 
 <Conten  picture={nike} alt="Nike"/> 
 <Conten  picture={sepatuWanita} alt="SepatuWanita"/> 
 <Conten  picture={league} alt="League"/> 
 <Conten  picture={converse} alt="Converse"/> 
 <Conten  picture={vans} alt="Vans"/> 
 <Conten  picture={sepatuPria} alt="SepatuPria"/> 
</div>



</Container>

        </div>


    )
}
export default CategoryPage;