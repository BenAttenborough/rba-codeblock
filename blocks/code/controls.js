/**
 * Created by ben on 01/05/2018.
 */

/**
 * Block dependencies
 */
import classnames from 'classnames';
import icons from './icons';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    } = wp.blocks;
const {
    Toolbar,
    Button,
    Tooltip,
    } = wp.components;

/**
 * Create a Block Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { blockAlignment, textAlignment, lineNumbers }, setAttributes } = this.props;

        const toggleLineNumbers = function () {
            setAttributes( { lineNumbers: ! lineNumbers } );
            console.log("Toggling line numbers");

        };

        return (
            <BlockControls>
                <BlockAlignmentToolbar
                    value={ blockAlignment }
                    onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
                />
                <AlignmentToolbar
                    value={ textAlignment }
                    onChange={ textAlignment => setAttributes( { textAlignment } ) }
                />
                <Toolbar>
                    <Tooltip text={ __( 'Line Numbers', 'rba-codeblock' )  }>
                        <Button
                            className={ classnames(
                                        'components-icon-button',
                                        'components-toolbar__control',
                                        { 'is-active': lineNumbers },
                                    ) }
                            onClick={ toggleLineNumbers }
                        >
                            {icons.lineNumbers}
                        </Button>
                    </Tooltip>
                </Toolbar>

            </BlockControls>
        );
    }
}
