import resolveLook from './resolver';
import assign from 'object-assign';
import {
	splitStyles
}
from './splitter';
export default {
	enhance(Component, sheet, pseudoMap, mediaQueryListener, matchState) {
		class ObsceneComponent extends Component {
			constructor() {
				super(...arguments);
				this.state = this.state ||  {};
				this.state._obscene = new Map();
				this.state._obscene.set('pseudoMap', pseudoMap);

				if (mediaQueryListener) {
					let me = this;
					this._onResizeListener = this._onResizeListener.bind(this);
					window.addEventListener('resize', function () {
						me._onResizeListener();
					});
				}
			}
			
			_onResizeListener() {
				this.forceUpdate();
			}

			render() {
				let el = super.render();

				el = resolveLook(this, el, sheet.selectors);

				return el;
			}
		}
		return ObsceneComponent;
	}
}