import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart';



export function Footer () {
    const {filters} = useFilters();
    const {cart} = useCart();
    return (
        <footer className="footer">
            {/* {JSON.stringify(filters, null, 2)}
            {JSON.stringify(cart, null, 2)} */}
            <h4>Mauricio Cruz</h4>
            <h5> ©Tiendita Buena Vida</h5>
        </footer>
    )
}