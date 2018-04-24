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
    } = wp.blocks;
const {
    PanelBody,
    PanelRow,
    RadioControl,
    } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { radioControl, language }, setAttributes } = this.props;

        return (
            <InspectorControls>
                <PanelBody
                    title={ __( 'Snippet settings', 'rba-codeblock' ) }
                >
                </PanelBody>

                <PanelBody>
                    <RadioControl
                        label={ __( 'Language', 'rba-codeblock' ) }
                        selected={ language }
                        options={ [
                            { label: 'HTML', value: 'html' },
                            { label: 'CSS', value: 'css' },
                            { label: 'JS', value: 'js' }
                        ] }
                        onChange={ language => setAttributes( { language } ) }
                    />
                </PanelBody>

            </InspectorControls>
        );
    }
}
