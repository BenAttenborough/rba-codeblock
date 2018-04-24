/**
 * Block dependencies
 */
import Inspector from './inspector';
import icon from './icon';
//import attributes from './attributes';
import './style.scss';
const { CodeEditor } = wp.components;

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
    registerBlockType,
    PlainText,
    } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
    'jsforwpblocks/code',
    {
        title: __('Example - Code', 'jsforwpblocks'),
        description: __('How to use the Code component for building your own editable blocks.', 'jsforwpblocks'),
        category: 'common',
        icon: icon,
        keywords: [
            __('Banner', 'jsforwpblocks'),
            __('Call to Action', 'jsforwpblocks'),
            __('Message', 'jsforwpblocks'),
        ],
        attributes: {
            radioControl: {
                type: 'string',
                default: 'css'
            },
        },
        edit: props => {
            const { attributes: { content, radioControl }, isSelected, className, setAttributes } = props;

            return [
                isSelected && <Inspector { ...{ setAttributes, ...props} } />,
                <CodeEditor
                    value={ content }
                    settings={Object.assign(  {
                codemirror: {
                mode: radioControl,
                lint: true
            } }) }
                    onChange={ ( content ) => setAttributes( { content } ) }
                />
            ];
        },
        save: props => {
            const { attributes: { content } } = props;
            return (
                <div>
                    <div class="message-body">
                        <p>Code below:</p>
                        <div className="code">{ content }</div>
                    </div>
                </div>
            );
        }
    }
);