import { differenceInYears, parseISO, isFuture, addDays, format, differenceInDays } from 'date-fns';

export type School = 'BPM' | 'PSS';

export interface GradeRule {
  label: string;
  minAge: number;
  maxAge: number;
  getCutoffDate: (entryYear: number) => Date;
}

export interface EligibilityResult {
  grade: string;
  eligible: boolean;
  ageOnCutoff: number;
  cutoffDate: Date;
}

export interface CalculationResult {
  match: EligibilityResult | null;
  results: EligibilityResult[];
  flags: string[];
  isFutureBirth?: boolean;
  earliestStartDate?: Date;
  earliestStartGrade?: string;
}

// Battery Park Montessori Rules
const bpmRules: GradeRule[] = [
  {
    label: '1s',
    minAge: 1,
    maxAge: 1,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 0, 1), // First day of attendance
  },
  {
    label: '2s',
    minAge: 2,
    maxAge: 2,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 11, 31), // Dec 31
  },
  {
    label: 'Casa (3-5)',
    minAge: 3,
    maxAge: 5,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 11, 31), // Dec 31
  },
];

// Pine Street School Rules
const pssRules: GradeRule[] = [
  {
    label: '1s',
    minAge: 1,
    maxAge: 1,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 0, 1), // First day
  },
  {
    label: '2s',
    minAge: 2,
    maxAge: 2,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '3s',
    minAge: 3,
    maxAge: 3,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '4s',
    minAge: 4,
    maxAge: 4,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: 'Kindergarten',
    minAge: 5,
    maxAge: 5,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '1st Grade',
    minAge: 6,
    maxAge: 6,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '2nd Grade',
    minAge: 7,
    maxAge: 7,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '3rd Grade',
    minAge: 8,
    maxAge: 8,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '4th Grade',
    minAge: 9,
    maxAge: 9,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '5th Grade',
    minAge: 10,
    maxAge: 10,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '6th Grade',
    minAge: 11,
    maxAge: 11,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '7th Grade',
    minAge: 12,
    maxAge: 12,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
  {
    label: '8th Grade',
    minAge: 13,
    maxAge: 13,
    getCutoffDate: (entryYear: number) => new Date(entryYear, 7, 31), // Aug 31
  },
];

export function getEligibility(
  birthDate: string,
  entryYear: number,
  school: School
): CalculationResult {
  const birthDateObj = parseISO(birthDate);
  const isFutureBirth = isFuture(birthDateObj);
  
  const rules = school === 'BPM' ? bpmRules : pssRules;
  
  // Calculate earliest possible start date (366 days after birth)
  const earliestStartDate = addDays(birthDateObj, 366);
  const earliestStartYear = earliestStartDate.getFullYear();
  const earliestStartMonth = earliestStartDate.getMonth();
  
  // Determine which academic year the earliest start date falls into
  let academicYearForEarliestStart = earliestStartYear;
  if (earliestStartMonth < 8) { // January to August (months 0-7)
    academicYearForEarliestStart = earliestStartYear - 1;
  }
  // For September onwards (month 8+), use the current year
  
  // Find the earliest grade they could join
  const earliestGrade = rules.find(rule => rule.minAge === 1);
  const earliestStartGrade = earliestGrade?.label || '1s';

  // For BPM, check eligibility for the selected academic year
  if (school === 'BPM') {
    // For 1s: Check if child will be 366 days old by the start of the academic year
    const academicYearStart = new Date(entryYear, 8, 1); // September 1st
    const daysOldAtStart = differenceInDays(academicYearStart, birthDateObj);
    const eligibleFor1s = daysOldAtStart >= 366;
    
    // For 2s: Check if child turns 2 by 12/31 of the academic year
    const dec31OfYear = new Date(entryYear, 11, 31); // December 31st
    const ageOnDec31 = differenceInYears(dec31OfYear, birthDateObj);
    const eligibleFor2s = ageOnDec31 >= 2;
    
    // For Casa: Check if child turns 3 by 12/31 of the academic year
    const eligibleForCasa = ageOnDec31 >= 3;
    
    // Determine which program they're eligible for (prioritize higher grades)
    let eligibleProgram = null;
    let ageOnCutoff = 0;
    let cutoffDate = academicYearStart;
    
    if (eligibleForCasa) {
      eligibleProgram = 'Casa (3-5)';
      ageOnCutoff = ageOnDec31;
      cutoffDate = dec31OfYear;
    } else if (eligibleFor2s) {
      eligibleProgram = '2s';
      ageOnCutoff = ageOnDec31;
      cutoffDate = dec31OfYear;
    } else if (eligibleFor1s) {
      eligibleProgram = '1s';
      ageOnCutoff = daysOldAtStart / 365.25; // Convert days to years for display
      cutoffDate = academicYearStart;
    }
    
    // Initialize variables
    let match = null;
    const flags: string[] = [];
    
    // Add flag for future birth dates
    if (isFutureBirth) {
      flags.push('📅 This calculation is based on a future birth date. Please verify the birth date once your child is born.');
    }
    
    if (eligibleProgram) {
      match = {
        grade: eligibleProgram,
        eligible: true,
        ageOnCutoff,
        cutoffDate,
      };
      
      if (isFutureBirth) {
        flags.push('✅ This child will be eligible for the selected academic year!');
      } else {
        flags.push('✅ This child is eligible for the selected academic year!');
      }
    } else {
      // Not eligible for any program in this academic year
      if (isFutureBirth) {
        flags.push('👶 This child will be too young for this program in the selected academic year. Consider applying for a later year.');
      } else {
        flags.push('Child is not yet eligible—consider waiting or applying to BPM 1s.');
      }
    }
    
    // Always add information about earliest possible start
    flags.push(`📅 Earliest possible start: ${format(earliestStartDate, 'MM/dd/yyyy')} (${academicYearForEarliestStart}-${academicYearForEarliestStart + 1} academic year for ${earliestStartGrade})`);
    
    return { 
      match, 
      results: [], // Not using the old results array for BPM
      flags, 
      isFutureBirth, 
      earliestStartDate, 
      earliestStartGrade 
    };
  }
  
  // For PSS, use the original logic
  const results: EligibilityResult[] = rules.map(rule => {
    const cutoffDate = rule.getCutoffDate(entryYear);
    const ageOnCutoff = differenceInYears(cutoffDate, birthDateObj);
    const eligible = ageOnCutoff >= rule.minAge && ageOnCutoff <= rule.maxAge;
    
    return {
      grade: rule.label,
      eligible,
      ageOnCutoff,
      cutoffDate,
    };
  });

  // Initialize variables
  const match = results.find(r => r.eligible) || null;
  const flags: string[] = [];

  // Add flag for future birth dates
  if (isFutureBirth) {
    flags.push('📅 This calculation is based on a future birth date. Please verify the birth date once your child is born.');
  }

  if (match) {
    if (isFutureBirth) {
      flags.push('✅ This child will be eligible for the selected academic year!');
    } else {
      flags.push('✅ This child is eligible for the selected academic year!');
    }
  } else {
    // Original logic for non-match cases (too young, aged out, PSS/BPM cross-check)
    const youngestAge = Math.min(...results.map(r => r.ageOnCutoff));
    const oldestAge = Math.max(...results.map(r => r.ageOnCutoff));
    
    if (youngestAge < 1) {
      if (isFutureBirth) {
        flags.push('👶 This child will be too young for this program in the selected academic year. Consider applying for a later year.');
      } else {
        flags.push('Child is not yet eligible—consider waiting or applying to BPM 1s.');
      }
    } else if (oldestAge > 13) {
      flags.push('Child aged out of this program.');
    } else {
      if (school === 'PSS') {
        const bpmResults = getEligibility(birthDate, entryYear, 'BPM');
        if (bpmResults.match) {
          flags.push(`Eligible for Battery Park Montessori ${bpmResults.match.grade} this year.`);
        }
      }
    }
  }
  
  // Always add information about earliest possible start
  flags.push(`📅 Earliest possible start: ${format(earliestStartDate, 'MM/dd/yyyy')} (${academicYearForEarliestStart}-${academicYearForEarliestStart + 1} academic year for ${earliestStartGrade})`);

  return { match, results, flags, isFutureBirth, earliestStartDate, earliestStartGrade };
}

export function getCurrentAcademicYear(): number {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  
  // If we're in the latter half of the year, use next year as academic year
  return currentMonth >= 6 ? currentYear + 1 : currentYear;
} 