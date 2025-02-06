import React, { version } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewBase, ViewComponent } from "react-native";

export default function Santander(){
    return(
        <SafeAreaView style={estilos.container}>
            <View style={estilos.header}>
                <Text style={estilos.sectionTitle}>Cuentas en pesos</Text>
                <View style={estilos.accountContainer}>
                    <Text style={estilos.accountType}>Débito líkeu</Text>
                    <Text style={estilos.availableBalance}>Dinero disponible en MXN</Text>
                    <Text style={estilos.balance}>$ 3.16</Text>
                    <Text style={estilos.accountNumber}>CTA 25**2068</Text>
                </View>
            </View>
            <View style={estilos.divider}/>
            <Text style={estilos.cardHint}>Toca la tarjeta para ver su información</Text>
            <View style={estilos.actionsContainer}>
                <TouchableOpacity style={estilos.actionItem}>
                    <Text>Prender o apagar tarjeta</Text>
                    <Text style={estilos.icon}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.actionItem}>
                    <Text>Movimientos</Text>
                    <Text style={estilos.icon}></Text>
                </TouchableOpacity>
                {['Realizar transferencia', 'Realizar pago', 'Realizar retiro sin tarjeta'].map((action) => (
                    <TouchableOpacity key={action} style={estilos.actionItem}>
                    <Text>{action}</Text>
                <Text style={estilos.icon}>+</Text>
                </TouchableOpacity>
                ))}
            </View>
            <View style={estilos.additionalOptions}>
                {[
                    { label: 'Generación de NIP', status: 'Nuevo' },
                    { label: 'Billeteras digitales', status: 'Nuevo' },
                    { label: 'Bloqueos selectivos', status: '>' },
                    { label: 'Bloqueo total y reposición', status: '>' },
                    { label: 'Aclaraciones', status: '+' },
                    { label: 'Mis finanzas', status: '>' },
                ].map((item) => (
                    <TouchableOpacity key={item.label} style={estilos.optionItem}>
                        <Text>{item.label}</Text>
                        <Text style={estilos.status}>{item.status}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    accountContainer:{
        backgroundColor:'red',
        borderRadius:15,
        padding:16,
        alignItems:'center',
        marginVertical:20,
        marginHorizontal:20,
    },
    header:{
        marginBottom: 16,
        color:'red',
    },
    sectionTitle: {
        fontSize:18,
        fontWeight:'bold',
        marginBottom:8,
    },
    accountType:{
        fontSize:16,
        marginBottom: 4,
    },
    balance: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    accountNumber: {
        fontSize: 16,
        color: 'black',
    },
    availableBalance: {
        fontSize: 14,
        color: 'black',
    },
    divider:{
        borderTopWidth:1,
        borderColor:'#e0e0e0',
        marginVertical:16,
    },
    cardHint: {
        color: 'gray',
        marginBottom: 16,
    },
    actionsContainer: {
        marginBottom: 24,
    },
    actionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
    },
    icon: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    additionalOptions: {
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
    },
    optionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
    },
    status: {
        color: 'green',
        fontWeight: 'bold',
    },
})