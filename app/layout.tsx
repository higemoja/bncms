import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | bokenote_',
    default: 'bokenote_',
  },
  description: '眠らせているネタはありませんか？bokenote_なら、あなたの漫才・コントネタを気軽に投稿・共有し、AIからの具体的なフィードバックで徹底的に磨き上げられます。同じ志を持つ仲間が集まるコミュニティで、互いに刺激し合い、共に笑いを創造しよう！アマチュア芸人、学生、作家志望、大歓迎！あなたのネタがここから進化します。',
  openGraph: {
    title: {
      template: '%s | bokenote_',
      default: 'bokenote_',
    },
    description: '眠らせているネタはありませんか？bokenote_なら、あなたの漫才・コントネタを気軽に投稿・共有し、AIからの具体的なフィードバックで徹底的に磨き上げられます。同じ志を持つ仲間が集まるコミュニティで、互いに刺激し合い、共に笑いを創造しよう！アマチュア芸人、学生、作家志望、大歓迎！あなたのネタがここから進化します。',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <body>
        <Header />
        <Nav tags={tags.contents} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
