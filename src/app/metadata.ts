import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: 'Guilherme Carvalho - Projects portfolio',
  description: 'Take a look at the projects I have been working on.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent'
  },
  authors: {name: 'Guilherme Carvalho', url: 'https://github.com/gdsc0301'},
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: false
  }
};