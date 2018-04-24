/**
 * Created by ben on 24/04/2018.
 */

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    ColorPalette,
    } = wp.blocks;
const {
    Button,
    ButtonGroup,
    PanelBody,
    PanelRow,
    PanelColor,
    RadioControl,
    Toolbar,
    } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { radioControl }, setAttributes } = this.props;

        return (
            <InspectorControls>
                <PanelBody
                    title={ __( 'Panel Body Title', 'rba-codeblock' ) }
                >
                    <PanelRow>
                        <p>{ __( 'Panel Body Copy', 'rba-codeblock' ) }</p>
                    </PanelRow>
                </PanelBody>

                <PanelBody>
                    <RadioControl
                        label={ __( 'Radio Control', 'rba-codeblock' ) }
                        selected={ radioControl }
                        options={ [
                            { label: 'HTML', value: 'html' },
                            { label: 'CSS', value: 'css' },
                            { label: 'JS', value: 'js' },
                        ] }
                        onChange={ radioControl => setAttributes( { radioControl } ) }
                    />
                </PanelBody>

            </InspectorControls>
        );
    }
}
