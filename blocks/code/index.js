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
            },
            content: {
                source: 'children',
                selector: '.RBACode',
            }
        },
        edit: props => {
            const { attributes: { content, language }, isSelected, setAttributes } = props;
            const editor = this;
            return [
                isSelected && <Inspector { ...{setAttributes, ...props, ...{ editor: editor } }  } />,
                <div>
                    <div>
                        <h4>Language: {language}</h4>
                    </div>
                    <CodeEditor editorRef={ ( ref ) => this.editorInstance = ref }
                        value={ content }
                        settings={Object.assign(  {
                codemirror: {
                mode: language,
                lint: true,
                lineNumbers: true
            } },
            	window._wpGutenbergCodeEditorSetting

            ) }
                        onChange={ ( content, language ) => setAttributes( { content }, {language}) }

                    />
                </div>
            ];
        },
        save: props => {
            const { attributes: { content, language } } = props;
            return (
                <div>
                    <div className="message-body">
                        <p>{language}</p>
                        <div className="RBACode">{ content }</div>
                    </div>
                </div>
            );
        }
    }
);