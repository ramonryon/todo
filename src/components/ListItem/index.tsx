import {useState} from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';


type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <C.Container>
            <input type="checkbox" checked={isChecked}/>
            <label>{item.name}</label>
        </C.Container>
    );
}