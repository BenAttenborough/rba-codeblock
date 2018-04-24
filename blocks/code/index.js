/**
 * Block dependencies
 */
import Inspector from './inspector';
import icon from './icon';
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
    'rba-codeblock/code',
    {
        title: __('Code snippet', 'rba-codeblock'),
        description: __('Write syntax highlighted snippet', 'rba-codeblock'),
        category: 'common',
        icon: icon,
        keywords: [
            __('Code', 'rba-codeblock'),
            __('Syntax highlighting', 'rba-codeblock'),
        ],
        attributes: {
            language: {
                type: 'string',
                default: 'css'
            }
        },
        edit: props => {
            const { attributes: { content, language }, isSelected, setAttributes } = props;

            return [
                isSelected && <Inspector { ...{ setAttributes, ...props} } />,
                <CodeEditor
                    value={ content }
                    settings={Object.assign(  {
                codemirror: {
                mode: language,
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