interface TypedOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  startDelay?: number;
}

export function useTyped(
  elementRef: Ref<HTMLElement | null>,
  options: TypedOptions
) {
  const isTyping = ref(false);
  const currentText = ref("");
  const currentIndex = ref(0);
  const currentStringIndex = ref(0);
  let typingInterval: number | undefined;
  let typingTimeout: number | undefined;

  const startTyping = () => {
    if (!elementRef.value) return;

    isTyping.value = true;

    // Start with a delay if specified
    if (options.startDelay) {
      typingTimeout = window.setTimeout(() => {
        typeNextCharacter();
      }, options.startDelay);
    } else {
      typeNextCharacter();
    }
  };

  const typeNextCharacter = () => {
    const strings = options.strings;
    if (!strings.length) return;

    const currentString = strings[currentStringIndex.value];

    if (currentIndex.value < currentString.length) {
      // Typing forward
      currentText.value += currentString.charAt(currentIndex.value);
      currentIndex.value++;

      typingTimeout = window.setTimeout(
        typeNextCharacter,
        options.typeSpeed || 100
      );
    } else {
      // Reached end of string, wait before backspacing
      typingTimeout = window.setTimeout(
        startBackspacing,
        options.backDelay || 2000
      );
    }
  };

  const startBackspacing = () => {
    const backspace = () => {
      if (currentIndex.value > 0) {
        // Backspacing
        currentText.value = currentText.value.substring(
          0,
          currentText.value.length - 1
        );
        currentIndex.value--;

        typingTimeout = window.setTimeout(backspace, options.backSpeed || 50);
      } else {
        // Move to next string
        currentStringIndex.value =
          (currentStringIndex.value + 1) % options.strings.length;

        // Start typing the next string after a short pause
        typingTimeout = window.setTimeout(typeNextCharacter, 500);
      }
    };

    backspace();
  };

  const stopTyping = () => {
    isTyping.value = false;

    if (typingInterval) {
      window.clearInterval(typingInterval);
      typingInterval = undefined;
    }

    if (typingTimeout) {
      window.clearTimeout(typingTimeout);
      typingTimeout = undefined;
    }
  };

  onMounted(() => {
    startTyping();
  });

  onUnmounted(() => {
    stopTyping();
  });

  return {
    currentText,
    isTyping,
  };
}
