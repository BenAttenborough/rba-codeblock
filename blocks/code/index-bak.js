/**
 * Created by ben on 07/04/2018.
 */

/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

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
            message: {
                type: 'array',
                source: 'children',
                selector: '.message-body',
            }
        },
        edit: props => {
            const { attributes: { message }, className, setAttributes } = props;
            const onChangeMessage = message => {
                setAttributes({message})
            };
            return (
                <div className={ className }>
                <pre><code class="language-css">
                    <PlainText
                        tagName="div"
                        //multiline="p"
                        placeholder={ __( 'Add your custom code', 'jsforwpblocks' ) }
                        onChange={ onChangeMessage }
                        value={ message }
                    />
                </code></pre>
                </div>
            );
        },
        save: props => {
            const { attributes: { message } } = props;
            return (
                <div>
                    <div class="message-body">
                        <pre><code class="language-css">{ message }</code></pre>
                    </div>
                </div>
            );
        },
    },
);
