"use client";

import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { TagInputProps } from "./types/types";

const TagInput: React.FC<TagInputProps> = ({
  initialTags = [],
  maxTags,
  separator = ",",
  placeholder = "Add tags...",
  allowDuplicates = false,
  onChange,
  disabled = false,
}) => {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [inputValue, setInputValue] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");

  const updateTags = (newTags: string[]) => {
    setTags(newTags);
    onChange?.(newTags);
  };

  const addTag = (tagText: string) => {
    const trimmedTag = tagText.trim();

    setWarningMessage("");

    if (!trimmedTag) return;

    if (!allowDuplicates && tags.includes(trimmedTag)) {
      setWarningMessage(`Tag "${trimmedTag}" already exists!`);
      setInputValue("");
      return;
    }

    if (maxTags && tags.length >= maxTags) {
      setWarningMessage(`Maximum ${maxTags} tags allowed!`);
      setInputValue("");
      return;
    }

    updateTags([...tags, trimmedTag]);
    setInputValue("");
  };

  const removeTag = (indexToRemove: number) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    updateTags(newTags);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (warningMessage) {
      setWarningMessage("");
    }

    if (separator && value.includes(separator)) {
      const parts = value.split(separator);
      const tagsToAdd = parts.slice(0, -1);
      const remainingText = parts[parts.length - 1];

      tagsToAdd.forEach((tag) => addTag(tag));
      setInputValue(remainingText);
    } else {
      setInputValue(value);
    }
  };

  const handleBlur = () => {
    addTag(inputValue);
  };

  return (
    <div>
      <div className={`tag-input-container`}>
        {tags.map((tag, index) => (
          <span key={index} className="tag-item">
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => {
                removeTag(index);
              }}
              className="tag-remove-button"
              disabled={disabled}
              aria-label={`Remove ${tag} tag`}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2L2 8M2 2L8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </span>
        ))}

        <input
          id="tag-input-field"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={tags.length === 0 ? placeholder : ""}
          disabled={disabled}
          className="tag-input-field"
        />
      </div>

      {/* Warning Message */}
      {warningMessage && (
        <div className="tag-warning-message">{warningMessage}</div>
      )}
    </div>
  );
};

export default TagInput;
