import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Color theme
const COLORS = {
  primary: '#3498db',
  secondary: '#2980b9',
  accent: '#f39c12',
  danger: '#e74c3c',
  success: '#2ecc71',
  warning: '#f39c12',
  background: '#f5f7fa',
  white: '#ffffff',
  text: '#2c3e50',
  lightText: '#7f8c8d',
  border: '#dfe6e9'
};

export default function ExploreTab() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learn About AM</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreTitle}>Amplitude Modulation Explained</Text>
          
          <View style={styles.exploreCard}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="information-outline" size={24} color={COLORS.primary} />
              <Text style={styles.cardTitle}>What is Amplitude Modulation?</Text>
            </View>
            <Text style={styles.cardText}>
              Amplitude Modulation (AM) is a modulation technique used in electronic communication, 
              where the amplitude of a carrier wave is varied in proportion to the message signal.
            </Text>
            <Text style={styles.cardText}>
              This modulation technique allows information to be transmitted over long distances by 
              encoding it onto a carrier wave that can propagate efficiently through different media.
            </Text>
          </View>

          <View style={styles.exploreCard}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="function-variant" size={24} color={COLORS.primary} />
              <Text style={styles.cardTitle}>The Math Behind AM</Text>
            </View>
            <Text style={styles.cardText}>
              The mathematical representation of an AM signal is:
            </Text>
            <Text style={styles.formula}>
              AM signal = [Ac + Am×cos(2πfm×t)] × cos(2πfc×t)
            </Text>
            <Text style={styles.cardText}>
              Where:
            </Text>
            <Text style={styles.cardText}>
              • Ac = Carrier amplitude
            </Text>
            <Text style={styles.cardText}>
              • Am = Message amplitude
            </Text>
            <Text style={styles.cardText}>
              • fm = Message frequency
            </Text>
            <Text style={styles.cardText}>
              • fc = Carrier frequency
            </Text>
          </View>

          <View style={styles.exploreCard}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="tune-vertical" size={24} color={COLORS.primary} />
              <Text style={styles.cardTitle}>Modulation Index</Text>
            </View>
            <Text style={styles.cardText}>
              The modulation index (μ) is the ratio of the message amplitude to the carrier amplitude:
            </Text>
            <Text style={styles.formula}>
              μ = Am/Ac
            </Text>
            <Text style={styles.cardText}>
              This value determines the type of modulation:
            </Text>
            <View style={styles.typeContainer}>
              <View style={[styles.typeBadge, { backgroundColor: COLORS.success }]}>
                <Text style={styles.typeText}>Under-modulation (μ {'<'} 1)</Text>
              </View>
              <Text style={styles.typeDescription}>
                When μ {'<'} 1, the signal is under-modulated. The carrier has more power than needed, 
                but the signal quality is good.
              </Text>
            </View>
            <View style={styles.typeContainer}>
              <View style={[styles.typeBadge, { backgroundColor: COLORS.warning }]}>
                <Text style={styles.typeText}>Critical modulation (μ = 1)</Text>
              </View>
              <Text style={styles.typeDescription}>
                When μ = 1, the signal is critically modulated. This is the optimal condition for 
                maximum efficiency without distortion.
              </Text>
            </View>
            <View style={styles.typeContainer}>
              <View style={[styles.typeBadge, { backgroundColor: COLORS.danger }]}>
                <Text style={styles.typeText}>Over-modulation (μ {'>'}1)</Text>
              </View>
              <Text style={styles.typeDescription}>
                When μ {'>'}1, the signal is over-modulated. This causes distortion in the demodulated 
                signal and should be avoided.
              </Text>
            </View>
          </View>
          
          <View style={styles.exploreCard}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="radio-tower" size={24} color={COLORS.primary} />
              <Text style={styles.cardTitle}>Applications of AM</Text>
            </View>
            <Text style={styles.cardText}>
              Amplitude modulation is used in various applications:
            </Text>
            <View style={styles.applicationItem}>
              <MaterialCommunityIcons name="radio" size={20} color={COLORS.primary} />
              <Text style={styles.applicationText}>
                <Text style={styles.applicationTitle}>AM Radio Broadcasting: </Text>
                Operating in the frequency range of 535-1705 kHz, AM radio was one of the first 
                widespread applications of amplitude modulation.
              </Text>
            </View>
            <View style={styles.applicationItem}>
              <MaterialCommunityIcons name="airplane" size={20} color={COLORS.primary} />
              <Text style={styles.applicationText}>
                <Text style={styles.applicationTitle}>Aviation Communication: </Text>
                Aircraft use AM for voice communication in the VHF band (118-137 MHz) due to its 
                simplicity and reliability.
              </Text>
            </View>
            <View style={styles.applicationItem}>
              <MaterialCommunityIcons name="earth" size={20} color={COLORS.primary} />
              <Text style={styles.applicationText}>
                <Text style={styles.applicationTitle}>Shortwave Radio: </Text>
                International broadcasting stations use AM on shortwave bands to reach audiences 
                across continents.
              </Text>
            </View>
            <View style={styles.applicationItem}>
              <MaterialCommunityIcons name="school" size={20} color={COLORS.primary} />
              <Text style={styles.applicationText}>
                <Text style={styles.applicationTitle}>Educational Systems: </Text>
                AM modulation serves as a foundational concept in communication theory and is used in 
                educational labs and demonstrations.
              </Text>
            </View>
          </View>

          <View style={styles.exploreCard}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="compare" size={24} color={COLORS.primary} />
              <Text style={styles.cardTitle}>AM vs. FM</Text>
            </View>
            <Text style={styles.cardText}>
              Amplitude Modulation (AM) and Frequency Modulation (FM) are two primary modulation techniques:
            </Text>
            <View style={styles.compareTable}>
              <View style={styles.compareHeader}>
                <Text style={[styles.compareCell, styles.compareHeaderText]}>Feature</Text>
                <Text style={[styles.compareCell, styles.compareHeaderText]}>AM</Text>
                <Text style={[styles.compareCell, styles.compareHeaderText]}>FM</Text>
              </View>
              <View style={styles.compareRow}>
                <Text style={styles.compareCell}>Noise Immunity</Text>
                <Text style={styles.compareCell}>Lower</Text>
                <Text style={styles.compareCell}>Higher</Text>
              </View>
              <View style={styles.compareRow}>
                <Text style={styles.compareCell}>Audio Quality</Text>
                <Text style={styles.compareCell}>Basic</Text>
                <Text style={styles.compareCell}>Better</Text>
              </View>
              <View style={styles.compareRow}>
                <Text style={styles.compareCell}>Power Efficiency</Text>
                <Text style={styles.compareCell}>Lower</Text>
                <Text style={styles.compareCell}>Higher</Text>
              </View>
              <View style={styles.compareRow}>
                <Text style={styles.compareCell}>Circuit Complexity</Text>
                <Text style={styles.compareCell}>Simpler</Text>
                <Text style={styles.compareCell}>Complex</Text>
              </View>
              <View style={styles.compareRow}>
                <Text style={styles.compareCell}>Bandwidth</Text>
                <Text style={styles.compareCell}>Narrower</Text>
                <Text style={styles.compareCell}>Wider</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  exploreContainer: {
    padding: 16,
  },
  exploreTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 16,
  },
  exploreCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginLeft: 8,
  },
  cardText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 22,
    marginBottom: 8,
  },
  formula: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    padding: 12,
    backgroundColor: COLORS.background,
    borderRadius: 4,
    marginVertical: 8,
  },
  typeContainer: {
    marginBottom: 16,
  },
  typeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  typeText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  typeDescription: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },
  applicationItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  applicationText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
    flex: 1,
    marginLeft: 8,
  },
  applicationTitle: {
    fontWeight: 'bold',
    color: COLORS.text,
  },
  compareTable: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 4,
    marginTop: 8,
  },
  compareHeader: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
  },
  compareHeaderText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  compareRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  compareCell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
  },
});
