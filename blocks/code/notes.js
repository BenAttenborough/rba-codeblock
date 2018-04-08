/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
//import { CodeEditor } from '@wordpress/components';
//import { Button } from '@wordpress/components';
const {
    CodeEditor,
    } = wp.components;


/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType, PlainText } = wp.blocks;

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
            content: {
                type: 'string',
            },
        },
        edit: props => {
            const { attributes: { content }, className, setAttributes } = props;
            //const onChangeMessage = message => {
            //    setAttributes({message})
            //};
            return (
                <PlainText
                    className={ className }
                    value={ content }
                    onChange={ ( content ) => setAttributes( { content } ) }
                />
            );
        },
        save: props => {
            const { attributes: { content } } = props;
            return (
                <div>
                    <div class="message-body">
                        <pre><code class="language-css">{ content }</code></pre>
                    </div>
                </div>
            );
        }
    }
);
