'use client';

import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import { ReportData } from '@/app/test/page';

Font.register({
    family: 'GeistMono',
    src: '/fonts/GeistMono-Regular.ttf',
});

Font.register({
    family: 'GeistSans',
    src: '/fonts/Geist-SemiBold.ttf',
});

// Styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
        fontFamily: 'GeistSans',
        fontWeight: 600,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 30,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    table: {
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        margin: 'auto',
        flexDirection: 'row',
    },
    tableCol: {
        width: '25%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCell: {
        margin: 'auto',
        marginTop: 5,
        fontSize: 10,
    },
});

const PDFDocument = ({ data }: { data: Readonly<ReportData> }) => (
    <Document>
        <Page size="A4" style={styles.page} wrap>
            <View style={styles.section}>
                <Text style={styles.title}>Fizibilite Raporu</Text>

                <Text style={styles.subtitle}>1. Girişimci Bilgileri</Text>
                <Text style={styles.text}>Girişimci: {data.entrepreneurInfo.name}</Text>
                <Text style={styles.text}>İşletme Adı: {data.entrepreneurInfo.businessName}</Text>
                <Text style={styles.text}>Kullanıcı Türü: {data.entrepreneurInfo.userType}</Text>
                <Text style={styles.text}>İşletme Türü: {data.entrepreneurInfo.businessType}</Text>
                <Text style={styles.text}>
                    İş Fikri Durumu: {data.entrepreneurInfo.businessIdeaStatus}
                </Text>

                <Text style={styles.subtitle}>2. Başlangıç Maliyetleri</Text>
                {Object.entries(data.startupCosts).map(([key, value]) => (
                    <Text key={key} style={styles.text}>
                        {key}: {value}
                    </Text>
                ))}

                <Text style={styles.subtitle}>3. Finansman Kaynakları</Text>
                <Text style={styles.text}>
                    Özkaynak Tutarı: {data.financingSources.equityAmount}
                </Text>
                <Text style={styles.text}>Kredi: {data.financingSources.creditAmount}</Text>
                <Text style={styles.text}>Borç: {data.financingSources.debtAmount}</Text>

                <Text style={styles.subtitle} break>
                    4. Ana Giderler
                </Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Hammadde Adı</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Birim</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Miktar</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Birim Fiyat</Text>
                        </View>
                    </View>
                    {data.mainExpenses.map((expense, index) => (
                        <View style={styles.tableRow} key={index}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{expense.name}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{expense.unit}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{expense.amount}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{expense.unitPrice}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <Text style={styles.subtitle}>5. İşletme Giderleri</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Kalemler</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Toplam Tutar (TL)</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Sabit (%)</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Değişen (%)</Text>
                        </View>
                    </View>
                    {data.operatingExpenses.map((expense, index) => (
                        <View style={styles.tableRow} key={index}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{expense.name}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{expense.totalAmount}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{expense.fixedPercentage}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{expense.variablePercentage}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <Text style={styles.subtitle}>6. Varsayım ve T. Kabuller</Text>
                <Text style={styles.text}>
                    İşletme Sermayesi Hesabı:{' '}
                    {data.assumptionsAndAcceptances.workingCapitalCalculation}
                </Text>
                <Text style={styles.text}>
                    İşletme Gelir Gider Hesabı:{' '}
                    {data.assumptionsAndAcceptances.businessIncomeExpenseCalculation}
                </Text>
                <Text style={styles.text}>
                    İskonto Oranı: {data.assumptionsAndAcceptances.discountRate}
                </Text>
            </View>
        </Page>
    </Document>
);

// Ana PDF Oluşturucu bileşeni
interface PDFGeneratorProps {
    data: ReportData;
}

export function PDFGenerator({ data }: Readonly<PDFGeneratorProps>) {
    return (
        <div className="p-4">
            <h2 className="mb-4 text-2xl font-bold">Fizibilite Raporu Oluşturucu</h2>
            <PDFDownloadLink
                document={<PDFDocument data={data} />}
                fileName="fizibilite_raporu.pdf"
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
                Pdf oluştur
            </PDFDownloadLink>
        </div>
    );
}
