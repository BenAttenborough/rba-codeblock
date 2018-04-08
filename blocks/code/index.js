/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
const { CodeEditor } = wp.components;

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType, PlainText } = wp.blocks;

function editCode() {
    return (
        <CodeEditor
            value={ '<p>This is some <b>HTML</b> code that will have syntax highlighting!</p>' }
            onChange={ value => console.log( value ) }
        />
    );
}

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
            // Perhaps just insert a code div
            // with the content in it and use code mirror to style it
            // but would need to detect changes on it?
            /*
            <plainText
                className="code"
                value={ content }
                onChange={ ( content ) => setAttributes( { content } ) }
             />
            */
            return (
                <CodeEditor
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
                        <p>Code below:</p>
                        <div className="code">{ content }</div>
                    </div>
                </div>
            );
        }
    }
);
