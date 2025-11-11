// Jeremy Martinez - 3487500
// COP5818 Homework 1 - JavaScript Data Analytics

// Eight Questions About the Condo Approval Dataset:
// 1. What is the average computed area (square feet) of all condo lots?
// 2. How many condo lots were created each year from 2006 to 2021?
// 3. What is the largest computed area and which lot does it belong to?
// 4. Which square number appears most frequently in the dataset?
// 5. What is the distribution of lot types in the dataset?
// 6. What is the average shape area for lots created after 2010?
// 7. Which condo regime number appears most often?
// 8. What percentage of lots have a computed area greater than 5000 square feet?

// Import the condo data
const condoData = require('./data.js');

// Class declaration with constructor and instance variables
class CondoAnalyzer {
    constructor(data) {
        this.data = data;
        this.totalRecords = data.length;
        this.analysisResults = new Map(); // Map collection
    }

    // Method using arrow function and default values
    calculateAverage = (field, filterYear = null) => {
        let validRecords = this.data.filter(record => {
            const value = record[field];
            const isValid = value && !isNaN(value) && value > 0;
            
            if (filterYear && isValid) {
                const year = new Date(record.CREATION_DT).getFullYear();
                return year > filterYear;
            }
            
            return isValid;
        });

        if (validRecords.length === 0) return 0;

        const sum = validRecords.reduce((acc, record) => acc + parseFloat(record[field]), 0);
        return sum / validRecords.length;
    }

    // Method using template literals and for...of loop
    analyzeYearlyCreation() {
        const yearCounts = {};
        
        // For...of statement
        for (const record of this.data) {
            if (record.CREATION_DT) {
                const year = new Date(record.CREATION_DT).getFullYear();
                if (year >= 2006 && year <= 2021) {
                    yearCounts[year] = (yearCounts[year] || 0) + 1;
                }
            }
        }

        // For...in statement
        for (const year in yearCounts) {
            console.log(`Year ${year}: ${yearCounts[year]} lots created`);
        }

        return yearCounts;
    }

    // Method using Array.map() and Set collection
    analyzeLotTypes() {
        const lotTypes = new Set(); // Set collection
        
        // Array.map() usage
        const typeArray = this.data.map(record => {
            const type = record.LOT_TYPE || 'Unknown';
            lotTypes.add(type);
            return type;
        });

        const typeCounts = {};
        typeArray.forEach(type => {
            typeCounts[type] = (typeCounts[type] || 0) + 1;
        });

        return { types: Array.from(lotTypes), counts: typeCounts };
    }
}

// Function declarations and variable declarations
function findLargestArea(data) {
    let largestArea = 0;
    let largestLot = null;
    
    // Let statement
    let currentRecord;
    
    for (let i = 0; i < data.length; i++) {
        currentRecord = data[i];
        
        // Const statement
        const area = parseFloat(currentRecord.COMPUTED_AREA_SF);
        
        if (area && area > largestArea) {
            largestArea = area;
            largestLot = currentRecord;
        }
    }
    
    return { area: largestArea, lot: largestLot };
}

function findMostFrequentSquare(data) {
    const squareCounts = {};
    
    data.forEach(record => {
        if (record.SQUARE) {
            const square = record.SQUARE.toString();
            squareCounts[square] = (squareCounts[square] || 0) + 1;
        }
    });
    
    let mostFrequent = null;
    let maxCount = 0;
    
    for (const square in squareCounts) {
        if (squareCounts[square] > maxCount) {
            maxCount = squareCounts[square];
            mostFrequent = square;
        }
    }
    
    return { square: mostFrequent, count: maxCount };
}

function findMostFrequentRegime(data) {
    const regimeCounts = {};
    
    data.forEach(record => {
        if (record.CONDO_REGIME_NUM) {
            const regime = record.CONDO_REGIME_NUM.toString();
            regimeCounts[regime] = (regimeCounts[regime] || 0) + 1;
        }
    });
    
    let mostFrequent = null;
    let maxCount = 0;
    
    for (const regime in regimeCounts) {
        if (regimeCounts[regime] > maxCount) {
            maxCount = regimeCounts[regime];
            mostFrequent = regime;
        }
    }
    
    return { regime: mostFrequent, count: maxCount };
}

function calculateLargeLotsPercentage(data) {
    const totalLots = data.length;
    const largeLots = data.filter(record => {
        const area = parseFloat(record.COMPUTED_AREA_SF);
        return area && area > 5000;
    });
    
    return (largeLots.length / totalLots) * 100;
}

// Main analysis execution
console.log('=== CONDO APPROVAL LOTS DATA ANALYSIS ===\n');

// Create analyzer instance
const analyzer = new CondoAnalyzer(condoData);

// Question 1: Average computed area
const avgArea = analyzer.calculateAverage('COMPUTED_AREA_SF');
console.log(`1. What is the average computed area (square feet) of all condo lots? ${avgArea.toFixed(2)} square feet`);

// Question 2: Yearly creation analysis
console.log('\n2. How many condo lots were created each year from 2006 to 2021?');
const yearlyData = analyzer.analyzeYearlyCreation();

// Question 3: Largest area
const largest = findLargestArea(condoData);
console.log(`\n3. What is the largest computed area and which lot does it belong to? ${largest.area} square feet (Object ID: ${largest.lot ? largest.lot.OBJECTID : 'N/A'})`);

// Question 4: Most frequent square
const frequentSquare = findMostFrequentSquare(condoData);
console.log(`\n4. Which square number appears most frequently in the dataset? Square ${frequentSquare.square} appears ${frequentSquare.count} times`);

// Question 5: Lot type distribution
const lotTypeAnalysis = analyzer.analyzeLotTypes();
console.log('\n5. What is the distribution of lot types in the dataset?');
// Using template literal
for (const type of lotTypeAnalysis.types) {
    const count = lotTypeAnalysis.counts[type];
    console.log(`   Lot Type ${type}: ${count} lots`);
}

// Question 6: Average shape area for lots after 2010
const avgShapeAreaAfter2010 = analyzer.calculateAverage('SHAPE_Area', 2010);
console.log(`\n6. What is the average shape area for lots created after 2010? ${avgShapeAreaAfter2010.toFixed(2)} square units`);

// Question 7: Most frequent condo regime
const frequentRegime = findMostFrequentRegime(condoData);
console.log(`\n7. Which condo regime number appears most often? Regime ${frequentRegime.regime} appears ${frequentRegime.count} times`);

// Question 8: Percentage of large lots
const largeLotsPercentage = calculateLargeLotsPercentage(condoData);
console.log(`\n8. What percentage of lots have a computed area greater than 5000 square feet? ${largeLotsPercentage.toFixed(2)}%`);

// Store results in Map for later use
analyzer.analysisResults.set('averageArea', avgArea);
analyzer.analysisResults.set('yearlyCreation', yearlyData);
analyzer.analysisResults.set('largestArea', largest);
analyzer.analysisResults.set('frequentSquare', frequentSquare);
analyzer.analysisResults.set('lotTypes', lotTypeAnalysis);
analyzer.analysisResults.set('avgShapeAreaAfter2010', avgShapeAreaAfter2010);
analyzer.analysisResults.set('frequentRegime', frequentRegime);
analyzer.analysisResults.set('largeLotsPercentage', largeLotsPercentage);

console.log(`\n=== Analysis completed for ${analyzer.totalRecords} records ===`);

// Display the Map collection contents
console.log('\n=== STORED ANALYSIS RESULTS (Map Collection) ===');
for (const [key, value] of analyzer.analysisResults) {
    if (typeof value === 'object' && value !== null) {
        console.log(`${key}: [Complex Object - see analysis above]`);
    } else {
        console.log(`${key}: ${value}`);
    }
}
