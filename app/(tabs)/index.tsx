import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Switch, 
  StatusBar, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import Slider from '@react-native-community/slider';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;

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

const chartConfig = {
  backgroundGradientFrom: COLORS.white,
  backgroundGradientTo: COLORS.white,
  color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
  strokeWidth: 2,
  decimalPlaces: 2,
  propsForDots: { r: "1", strokeWidth: "1", stroke: COLORS.primary }
};

export default function SimulationTab() {
  const [fm, setFm] = useState(2);
  const [am, setAm] = useState(1);
  const [ac, setAc] = useState(1);
  const [showMessage, setShowMessage] = useState(true);
  const [showCarrier, setShowCarrier] = useState(true);
  const [showModulated, setShowModulated] = useState(true);

  // Generate time domain array
  const t = Array.from({ length: 1000 }, (_, i) => i / 1000);

  // Generate signal data
  const message = t.map(t => am * Math.cos(2 * Math.PI * fm * t));
  const carrier = t.map(t => ac * Math.cos(2 * Math.PI * 20 * t));
  const modulated = t.map(t => (ac + am * Math.cos(2 * Math.PI * fm * t)) * Math.cos(2 * Math.PI * 20 * t));

  // Calculate modulation index
  const modIndex = (am / ac).toFixed(2);

  // Determine modulation type
  const modulationType = parseFloat(modIndex) > 1
    ? "Over-modulated"
    : modIndex === "1.00"
    ? "Critically modulated"
    : "Under-modulated";

  // Get modulation status color
  const getModulationColor = () => {
    if (parseFloat(modIndex) > 1) return COLORS.danger;
    if (modIndex === "1.00") return COLORS.warning;
    return COLORS.success;
  };

  // Format data for charts
  const formatData = (data:any) => ({
    datasets: [{ 
      data: data.slice(0, 100), 
      strokeWidth: 2,
      color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})` 
    }],
    labels: []
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Amplitude Modulation</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Message Frequency (fm): {fm} Hz</Text>
          <Slider
            minimumValue={1}
            maximumValue={10}
            step={0.1}
            value={fm}
            onValueChange={setFm}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.border}
            thumbTintColor={COLORS.primary}
            style={styles.slider}
          />

          <Text style={styles.sliderLabel}>Message Amplitude (Am): {am}</Text>
          <Slider
            minimumValue={0}
            maximumValue={5}
            step={0.1}
            value={am}
            onValueChange={setAm}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.border}
            thumbTintColor={COLORS.primary}
            style={styles.slider}
          />

          <Text style={styles.sliderLabel}>Carrier Amplitude (Ac): {ac}</Text>
          <Slider
            minimumValue={0.1}
            maximumValue={5}
            step={0.1}
            value={ac}
            onValueChange={setAc}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.border}
            thumbTintColor={COLORS.primary}
            style={styles.slider}
          />

          <View style={styles.modulationInfoContainer}>
            <View style={styles.modulationInfo}>
              <Text style={styles.modulationLabel}>Modulation Index:</Text>
              <Text style={styles.modulationValue}>{modIndex}</Text>
            </View>
            <View style={[styles.modulationStatusBadge, { backgroundColor: getModulationColor() }]}>
              <Text style={styles.modulationStatusText}>{modulationType}</Text>
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.switchItem}>
              <Text style={styles.switchLabel}>Message</Text>
              <Switch
                value={showMessage}
                onValueChange={setShowMessage}
                trackColor={{ false: COLORS.border, true: COLORS.primary }}
                thumbColor={showMessage ? COLORS.secondary : COLORS.white}
              />
            </View>
            <View style={styles.switchItem}>
              <Text style={styles.switchLabel}>Carrier</Text>
              <Switch
                value={showCarrier}
                onValueChange={setShowCarrier}
                trackColor={{ false: COLORS.border, true: COLORS.primary }}
                thumbColor={showCarrier ? COLORS.secondary : COLORS.white}
              />
            </View>
            <View style={styles.switchItem}>
              <Text style={styles.switchLabel}>AM Signal</Text>
              <Switch
                value={showModulated}
                onValueChange={setShowModulated}
                trackColor={{ false: COLORS.border, true: COLORS.primary }}
                thumbColor={showModulated ? COLORS.secondary : COLORS.white}
              />
            </View>
          </View>
        </View>

        {/* Charts Section */}
        <View style={styles.chartsContainer}>
          {showMessage && (
            <View style={styles.chartWrapper}>
              <View style={styles.chartHeader}>
                <MaterialCommunityIcons name="sine-wave" size={20} color={COLORS.primary} />
                <Text style={styles.chartTitle}>Message Signal</Text>
              </View>
              <LineChart
                data={formatData(message)}
                width={screenWidth - 40}
                height={180}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
              />
            </View>
          )}

          {showCarrier && (
            <View style={styles.chartWrapper}>
              <View style={styles.chartHeader}>
                <MaterialCommunityIcons name="sine-wave" size={20} color={COLORS.primary} />
                <Text style={styles.chartTitle}>Carrier Signal</Text>
              </View>
              <LineChart
                data={formatData(carrier)}
                width={screenWidth - 40}
                height={180}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
              />
            </View>
          )}

          {showModulated && (
            <View style={styles.chartWrapper}>
              <View style={styles.chartHeader}>
                <MaterialCommunityIcons name="chart-line-variant" size={20} color={COLORS.primary} />
                <Text style={styles.chartTitle}>AM Signal</Text>
              </View>
              <LineChart
                data={formatData(modulated)}
                width={screenWidth - 40}
                height={180}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
              />
            </View>
          )}
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
  sliderContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    margin: 16,
    padding: 16,
    elevation: 2,
  },
  sliderLabel: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 8,
  },
  slider: {
    height: 40,
    marginBottom: 16,
  },
  modulationInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 16,
  },
  modulationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modulationLabel: {
    fontSize: 16,
    color: COLORS.text,
  },
  modulationValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginLeft: 4,
  },
  modulationStatusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  modulationStatusText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  switchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    width: '33%',
  },
  switchLabel: {
    fontSize: 14,
    color: COLORS.text,
    marginRight: 8,
  },
  chartsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  chartWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginLeft: 8,
  },
  chart: {
    borderRadius: 8,
    marginTop: 4,
  },
});
