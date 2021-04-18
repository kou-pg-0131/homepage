import React from 'react';
import styles from './privacyPolicy.module.scss';
import { Layout } from '../layout';
import { ExternalLink, Section } from '../components';

const PrivacyPolicy: React.VFC = () => {
  const items = [
    {
      title: '免責事項',
      content: (
        <p>
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
      ),
    },
    {
      title: 'アクセス解析ツールについて',
      content: (
        <p>
          当サイトでは、 Google によるアクセス解析ツール「 Google アナリティクス」を利用しています。この Google アナリティクスはトラフィックデータの収集のために Cookie を使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能は Cookie を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは <ExternalLink className={styles.link} href='https://marketingplatform.google.com/about/analytics/terms/jp/'>Google アナリティクス利用規約</ExternalLink> を参照してください。
        </p>
      ),
    },
    {
      title: 'プライバシーポリシーの変更について',
      content: (
        <p>
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
        </p>
      ),
    },
  ];

  return (
    <Layout hideMenu title='プライバシーポリシー'>
      {items.map(item => (
        <Section key={item.title} title={item.title}>
          {item.content}
        </Section>
      ))}
    </Layout>
  );
};

export default PrivacyPolicy;
