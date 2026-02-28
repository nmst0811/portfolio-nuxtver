export interface Image {
  src: string
  lb: string
}

export interface Work {
  id: string
  title: string
  href: string
  period: string
  time?: string
  images: Image[]
  description: string | null
  repo: string | null
  isOther?: boolean
}

export const worksData: Work[] = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    title: '｢Pythonで曲を奏でよう｣',
    href: 'https://colab.research.google.com/drive/1aQfIRkB5sl9S3uFi-EicKkGd39ZIZvpA?usp=sharing',
    period: '2024年7月〜8月',
    images: [],
    description: 'Google Colab上でPythonを使用して音楽を生成するプロジェクトです。音響合成の基礎を学びながら実装しました。',
    repo: null,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    title: '2⁷-4「クイズリバーシ」',
    href: 'https://yurei0903.github.io/power2_7-4-main/',
    period: '2024年6月〜2025年1月',
    images: [
      { src: '/images/Works/quizreversi_01.png', lb: 'works' },
      { src: '/images/Works/quizreversi_02.png', lb: 'works' },
    ],
    description: 'Hack Uにて、「2⁷-4(パワー・ツー・セブン・マイナス・フォー) presents Quiz×Reversi」を制作しました。総合監修、プログラミングを担当しました。',
    repo: 'https://github.com/nmst0811/power2_7-4',
  },
  {
    id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    title: 'clock for URAKATA',
    href: 'https://github.com/nmst0811/clock-for-URAKATA',
    period: '2024年12月〜2025年1月',
    time: '約10時間',
    images: [
      { src: '/images/Works/cfu_01.png', lb: 'works' },
      { src: '/images/Works/cfu_02.gif', lb: 'works' },
      { src: '/images/Works/cfu_03.gif', lb: 'works' },
    ],
    description: '「clock for URAKATA」は、ステージを支える裏方の皆さんのために制作したアプリケーションです。照明オペレーション時に必要な時計・ストップウォッチを一画面で実現。黒背景に蛍光グリーン表示で視認性を確保しています。',
    repo: 'https://github.com/nmst0811/clock-for-URAKATA',
  },
  {
    id: 'a1b2c3d4-e5f6-4a5b-b6c7-d8e9f0a1b2c3',
    title: 'Unit-Calculator for URAKATA',
    href: 'https://github.com/nmst0811/Unit-Calculator-for-URAKATA',
    period: '2025年2月',
    time: '約10時間',
    images: [],
    description: '「Unit-Calculator for URAKATA」は、図面や計算を行う裏方の皆さんのために制作した単位変換ツールです。メートル・インチ・尺貫法を相互変換でき、一般的な計算にも対応しています。',
    repo: 'https://github.com/nmst0811/Unit-Calculator-for-URAKATA',
  }
]
