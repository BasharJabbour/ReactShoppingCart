import Button from '@material-ui/core/Button';

// Types
import { CartItemType } from '../App';

// Styles
import { Wrapper } from './item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (item: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>

    </Wrapper>
)