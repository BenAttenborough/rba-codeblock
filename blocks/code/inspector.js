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
        const { attributes: { language, theme }, setAttributes, editor } = this.props;

        const onChangeLanguage = function (language) {
            setAttributes( { language } );
            editor.setOption( 'mode', language );
        }

        const onChangeTheme = function (theme) {
            setAttributes( { theme } );
            editor.setOption( 'theme', theme );
        }

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
                            { label: 'HTML', value: 'htmlmixed' },
                            { label: 'CSS', value: 'css' },
                            { label: 'JS', value: 'javascript' },
                            { label: 'JSX', value: 'jsx' }
                        ] }
                        onChange={ onChangeLanguage }
                    />
                    <RadioControl
                        label={ __( 'Theme', 'rba_codeblock' ) }
                        selected={ theme }
                        options={ [
                            { label: 'Light', value: 'default'},
                            { label: 'Dark', value: 'material'}
                        ]}
                        onChange={ onChangeTheme }
                    />
                </PanelBody>

            </InspectorControls>
        );
    }
}
