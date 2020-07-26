import React, {
    Component
} from 'react';
import * as recommendations from './recommendation.json';

class Recc extends Component {
    render() {
        const weatherId = this.props.data;
        const recommend = recommendations.default[weatherId].recommendation;
        return ( <
            div className = "rec-text" > {
                recommend
            } < /div>

        );
    }
}
export default Recc;