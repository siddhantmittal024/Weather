import React, {
    Component
} from 'react';
import './css/Recommend.css';
import * as recommendation from './recommendation.json';

class Recc extends Component {
    render() {
        const id = this.props.data;
        const recommend = recommendation.default[id];

        return ( <
            blockquote > {
                recommend
            } < /blockquote>

        );
    }
}
export default Recc;