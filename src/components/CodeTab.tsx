import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // 使用 Prism 主题

interface CodeTabProps {
    codeString: string;
}

const CodeTab: React.FC<React.PropsWithChildren<CodeTabProps>> = ({ codeString, children }) => {
    const [activeTab, setActiveTab] = useState<'view' | 'code'>('view');
    const [copied, setCopied] = useState(false);
    const activeClasses = "bg-primary text-white";
    const inactiveClasses = "bg-gray dark:bg-meta-4 text-black dark:text-white";

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 显示2秒后隐藏
    };

    return (
        <div className="relative">
            <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="mb-7.5 flex flex-wrap gap-3 rounded-lg border border-stroke px-4 py-3 dark:border-strokedark">
                    <button
                        className={`rounded-md px-4 py-2 md:px-4 sm:px-6 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${activeTab === 'view' ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setActiveTab('view')}
                    >
                        页面视图
                    </button>
                    <button
                        className={`rounded-md px-4 py-2 md:px-4 sm:px-6 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${activeTab === 'code' ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setActiveTab('code')}
                    >
                        查看源码
                    </button>
                </div>

                <div className="px-4">
                    {activeTab === 'view' && children}
                    {activeTab === 'code' && (
                        <div className="flex flex-col">
                            <div className="self-end">
                                <CopyToClipboard text={codeString} onCopy={handleCopy}>
                                    <button className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600">
                                        复制代码
                                    </button>
                                </CopyToClipboard>
                            </div>
                            <SyntaxHighlighter language="jsx" style={prism}>
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CodeTab;
