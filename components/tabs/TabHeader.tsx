import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ThemedIcon } from "../common/ThemedIcon";
import { ThemedText } from "../common/ThemedText";
import { ThemedView } from "../common/ThemedView";

const dropdownOptions = ["Q-Gurgaon", "Option 1", "Option 2"];

export const TabHeader = () => {
  const textColor = useThemeColor({}, "text");
  const borderColor = useThemeColor({}, "borderColor");
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const [headerValue, setHeaderValue] = useState<string>(dropdownOptions[0]);

  const handleDropdownClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setIsSearchActive(false);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
    setIsDropdownVisible(false);
  };

  return (
    <SafeAreaView>
      <ThemedView style={styles.header}>
        {!isSearchActive ? (
          <TouchableOpacity onPress={handleDropdownClick}>
            <ThemedView style={{ flexDirection: "row", alignItems: "center" }}>
              <ThemedText
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {headerValue}
              </ThemedText>
              <ThemedIcon
                name="chevron-down"
                size={18}
                style={{
                  marginLeft: 4,
                }}
              />
            </ThemedView>
          </TouchableOpacity>
        ) : (
          <ThemedView style={styles.searchBar}>
            <TextInput
              placeholder="Search..."
              style={[styles.searchInput, { color: textColor, borderColor }]}
              autoFocus
              onBlur={() => setIsSearchActive(false)}
            />
          </ThemedView>
        )}

        <TouchableOpacity onPress={handleSearchClick}>
          <ThemedIcon name="search" size={22} />
        </TouchableOpacity>
      </ThemedView>

      {isDropdownVisible && !isSearchActive && (
        <ThemedView style={styles.dropdown}>
          {dropdownOptions
            .filter((val) => val !== headerValue)
            .map((item, i) => (
              <TouchableOpacity
                onPress={() => setHeaderValue(item)}
                key={`dropdown-item-${i}`}
              >
                <ThemedText style={styles.dropdownItem}>{item}</ThemedText>
              </TouchableOpacity>
            ))}
        </ThemedView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    position: "relative",
  },
  searchBar: {
    flex: 1,
    marginRight: 16,
  },
  searchInput: {
    fontSize: 18,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
  dropdown: {
    position: "absolute",
    top: 120,
    left: 8,
    padding: 10,
    borderWidth: 0,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    minWidth: 200,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 12,
  },
});
