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
            //const { attributes: { content }, className, setAttributes } = props;
            const { value } = props;
            return (
                <CodeEditor
                    value={ '<p>This is some <b>HTML</b> code that will have syntax highlighting!</p>' }
                    onChange={ ( value ) => console.log( value ) }
                />
            );
        },
        save: props => {
            const { value } = props;
            return (
                <div>
                    <div class="message-body">
                        { value }
                    </div>
                </div>
            );
        }
    }
);
