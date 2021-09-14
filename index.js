// Import stylesheets
import './license.js';

// Spread.Sheets関連モジュールをインポートします
import * as GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-resources-ja';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white';

// SpreadJSデータのインポート
import { data } from './data.js';

import './style.css';

// 言語設定を日本語に設定します
GC.Spread.Common.CultureManager.culture('ja-jp');

// SpreadJSを表示するDOM要素を取得します
var ssDom = document.getElementById('ss');

//----------------------------------
// SpreadJSを初期化します
//----------------------------------
var spread = new GC.Spread.Sheets.Workbook(ssDom);

// SpreadJSにデータをロードします
spread.fromJSON(data);

//----------------------------------
// タブの表示有無を設定します
//----------------------------------
spread.options.tabStripVisible = false;
spread.options.newTabVisible = false;

//----------------------------------
// スクロールバーの表示有無を設定します
//----------------------------------
spread.options.showHorizontalScrollbar = false;
spread.options.showVerticalScrollbar = false;

//----------------------------------
// シートが行列数の最大範囲を超えて
// スクロールしないように設定します
//----------------------------------
spread.options.scrollbarMaxAlign = true;
spread.options.scrollbarShowMax = true;

//----------------------------------
// SpreadJSのシートを取得します
//----------------------------------
var sheet = spread.getActiveSheet();

// 行と列の幅を設定します
sheet.setColumnWidth(0, 168);

sheet.suspendPaint();

// 4行目から2行分をグループ化します
sheet.rowOutlines.group(3, 2);
// 7行目から2行分をグループ化します
sheet.rowOutlines.group(6, 2);
// 2列目から1列分をグループ化します
sheet.columnOutlines.group(1, 1);
// 4列目から1列分をグループ化します
sheet.columnOutlines.group(3, 1);

sheet.resumePaint();
