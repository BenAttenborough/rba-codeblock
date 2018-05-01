/**
 * Block dependencies
 */
import Inspector from './inspector';
import Controls from './controls';
import icon from './icon';
import './style.scss';
const { CodeEditor } = wp.components;

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
    registerBlockType,
    BlockControls,
    } = wp.blocks;
const {
    Dashicon,
    Toolbar,
    Button,
    Tooltip,
    } = wp.components;


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
            textAlignment: {
                type: 'string',
            },
            blockAlignment: {
                type: 'string',
            },
            language: {
                type: 'string',
                default: 'css'
            },
            content: {
                source: 'children',
                selector: '.RBACode',
            },
            lineNumbers: {
                type: 'boolean',
                default: false
            }
        },
        edit: props => {
            const { attributes: { textAlignment, blockAlignment, content, language, lineNumbers }, isSelected, setAttributes } = props;
            return [
                isSelected && (<Inspector { ...{setAttributes, ...props, ...{editor: this}}  } />),
                isSelected && (<Controls { ...{setAttributes, ...props, ...{editor: this}}  } />),
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
                                    lineNumbers: lineNumbers,
                                } },
                                    window._wpGutenbergCodeEditorSetting

                                ) }
                                onChange={ ( content, language, lineNumbers ) => setAttributes( { content }, {language}, {lineNumbers}) }
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
                            <pre className="RBACode">
                                { content }
                            </pre>
                    </div>
                </div>
            );
        }
    }
);